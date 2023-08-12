import {
  Container,
  Element,
  Details,
  LeftDetails,
  RightDetails,
  Options
} from "./style";

import {
  trashIcon,
  editIcon
} from "../../assets/images/Icons";

import ServiceOption from "../ServiceOption";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import roleIconsHashTable from "../../utils/roleIconsHashTable";
import serviceProviderService from "../../services/serviceProvider.service";

export default function Content ({ servicesData, showOptions, setShowOptions }) {

  const { auth } = useAuth();

  const navigate = useNavigate();
  const [iconsHashTable, setIconsHashTable] = useState({});
  const [updateServiceData, setUpdateServiceData] = useState(null);
  const [showUpdateOption, setShowUpdateOption] = useState(false);

  useEffect(() => {
    const currentHashtable = roleIconsHashTable();
    setIconsHashTable(currentHashtable);
  }, []);

  function handleEdit (e, service) {
    e.stopPropagation();

    setShowUpdateOption(true);
    setUpdateServiceData({...service});
  }

  function handleDelete (e, id) {
    e.stopPropagation();
    
    if (!window.confirm("Tem certeza de que quer excluir este serviço?")) {
      return;
    }

    setShowOptions("delete");

    serviceProviderService.deleteService(id, auth.token)
      .then(() => setShowOptions(true))
      .catch(err => console.log(err.message));
  }

  return (
    <>
      <Container showUpdateOption={showUpdateOption}>
        {servicesData.map(service => (
          <Element key={service.id} onClick={() => navigate(`/service/${service.id}`)}>
            <img src={service.imageURL} alt={service.title} title={service.title} />
            <Details>
              <LeftDetails>
                <h2>{service.title}</h2>
                <h3>R$ {service.price.toFixed(2)}</h3>
              </LeftDetails>
              <RightDetails>
                <img src={iconsHashTable[service.role]} />
              </RightDetails>
            </Details>
            {showOptions &&
              <Options>
                <img src={editIcon} onClick={(e) => handleEdit(e, service)} />
                <img src={trashIcon} onClick={(e) => handleDelete(e, service.id)} />
              </Options>
            }
          </Element>
        ))}
      </Container>
      {showUpdateOption &&
        <ServiceOption
          option={"update"} 
          serviceData={updateServiceData}
          setShowOption={setShowUpdateOption}
          setOption={setShowOptions}
          token={auth.token}
        />
      }
    </>
  )
}