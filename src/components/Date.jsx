import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
dayjs.locale(ptBr);

function Day() {
  const day = dayjs().format('dddd').replace('-feira', '');
  const dayFormatted = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;

  const monthDate = dayjs().format('DD/MM')
  return(
    <h1 data-test='today'>
      {`${dayFormatted}, ${monthDate}`}
    </h1>
  )
}

export default Day;