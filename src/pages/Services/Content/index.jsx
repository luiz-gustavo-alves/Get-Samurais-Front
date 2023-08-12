import {
  Container,
  Element,
  Details,
  LeftDetails,
  RightDetails
} from "./style";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import roleIconsHashTable from "../../../utils/roleIconsHashTable";

export default function Content ({ servicesData }) {

  const navigate = useNavigate();
  const [iconsHashTable, setIconsHashTable] = useState({});

  useEffect(() => {
    const currentHashtable = roleIconsHashTable();
    setIconsHashTable(currentHashtable);
  }, [])

  return (
    <Container>
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
        </Element>
      ))}
    </Container>
  )
}