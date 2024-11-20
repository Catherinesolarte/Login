import BAlert from "react-bootstrap/Alert";
function Alert({color, msg}) {
	return (
		<>
    <BAlert variant={color} className="mb-0">
    <p className="mb-0 fw-bold">{msg}</p>
    </BAlert>
    </>
  )
}
export default Alert