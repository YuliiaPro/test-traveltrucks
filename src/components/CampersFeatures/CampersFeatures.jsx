import { useSelector } from 'react-redux';
import css from './CampersFeatures.module.css';
import { selectCampersById } from '../../redux/campers/selectors';
import TransmitionIcon from '../../images/icons/transmition.svg';

export default function CampersFeatures() {
  const camper = useSelector(selectCampersById);

  if (!camper) {
    return <p>No camper data available.</p>;
  }
  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    radio,
    TV,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  return (
    <div className={css.container}>
      <ul className={css.equipmentList}>
        <li>
          <p className={css.equipmentItem}>
            <img
              src={TransmitionIcon}
              alt="Transmition Icon"
              width={20}
              height={20}
              className={css.icon}
            />
            {transmission}
          </p>
        </li>

        <li>
          <p className={css.equipmentItem}>{engine}</p>
        </li>
        <li>{AC && <p className={css.equipmentItem}>AC</p>}</li>
        <li>{bathroom && <p className={css.equipmentItem}>bathroom</p>}</li>
        <li>{kitchen && <p className={css.equipmentItem}>kitchen</p>}</li>
        <li>{TV && <p className={css.equipmentItem}>TV</p>}</li>
        <li>{radio && <p className={css.equipmentItem}>radio</p>}</li>
        <li>
          {refrigerator && <p className={css.equipmentItem}>refrigerator</p>}
        </li>
        <li>{microwave && <p className={css.equipmentItem}>microwave</p>}</li>
        <li>{gas && <p className={css.equipmentItem}>gas</p>}</li>
        <li>{water && <p className={css.equipmentItem}>water</p>}</li>
      </ul>

      <p className={css.textHeader}>Vehicle details</p>
      <div className={css.line}></div>
      <ul className={css.vehileList}>
        <li className={css.vehileItem}>
          <p>Form</p>
          <p className={css.capitalize}>{form}</p>
        </li>
        <li className={css.vehileItem}>
          <p>Length</p>
          <p>{length.replace(/(\D)$/, ' $1')}</p>
        </li>
        <li className={css.vehileItem}>
          <p>Width</p>
          <p>{width.replace(/(\D)$/, ' $1')}</p>
        </li>
        <li className={css.vehileItem}>
          <p>Height</p>
          <p>{height.replace(/(\D)$/, ' $1')}</p>
        </li>
        <li className={css.vehileItem}>
          <p>Tank</p>
          <p>{tank.replace(/(\D)$/, ' $1')}</p>
        </li>
        <li className={css.vehileItem}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </div>
  );
}
