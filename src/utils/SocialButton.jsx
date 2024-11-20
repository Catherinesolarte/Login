import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import 
import Button from "react-bootstrap/Button";

function SocialButton({icon}) {
	return (
		<Button variant="outline-dark" style={{ width: "3em", height: "3em" }} className="d-flex align-items-center justify-content-center rounded-circle">
			<FontAwesomeIcon icon={icon} size="xl" />
		</Button>
  )
}
export default SocialButton