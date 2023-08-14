import {
  ServiceContainer,
  ServiceDefault
} from "../../../components/Services";

import {
  OffsetContainer,
  OffsetButton
} from "../../../components/Offset";

import {
  CenterLoader
} from "../../../components/Loaders";

import { 
  Oval 
} from "react-loader-spinner";

import Content from "../../../components/Content";

import { useEffect, useState } from "react";
import useOffset from "../../../hooks/useOffset";
import serviceService from "../../../services/service.service";

export default function RecentServices() {

  const [servicesData, setServicesData] = useState(null);
  const { offset, resetOffset, updateOffset, validateOffset } = useOffset();

  useEffect(() => {

    let currentOffset = offset;
    if (servicesData === null) {
      resetOffset();
      currentOffset = 0;
    }

    serviceService.getServices(currentOffset)
      .then(res => {

        if (servicesData === null) {
          setServicesData(res.data);

        } else {

          const { data } = res.data;
          const currentData = [...servicesData.data];
          currentData.push(...data);
          setServicesData({...servicesData, data: currentData })
        }

      })
      .catch(() => alert("Erro interno do servidor.\nTente novamente mais tarde!"));

  }, [offset, ]);

  if (servicesData === null) {
    return (
      <CenterLoader>
        <Oval
          height="200"
          width="200"
          color="#515151"
          ariaLabel='oval-loading'
          secondaryColor="#000"
          strokeWidth={2}
          strokeWidthSecondary={2}
          visible={true}
        />
      </CenterLoader>
    )
  }

  return (
    <ServiceContainer>
      {servicesData.data.length > 0 ?
        <Content
          servicesData={servicesData.data} 
          showOptions={false} 
        />
        :
        <ServiceDefault>
          <h2>Não há serviços disponíveis!</h2>
        </ServiceDefault>
      }
      {validateOffset(servicesData.data, servicesData.counter) &&
        <OffsetContainer>
          <OffsetButton onClick={updateOffset}>Ver mais</OffsetButton>
        </OffsetContainer>
      }
    </ServiceContainer>
  )
}