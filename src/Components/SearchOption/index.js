import { useState } from "react";
import { Container, Label, Checkbox } from "./styled";

const SearchOption = ({ id, label, callback, type }) => {
	const [isChecked, setIsChecked] = useState(false);
	const onChanged = () => {
		callback(id, !isChecked);
		setIsChecked(!isChecked);
	};
	return (
		<Container>
			<Label>
				<Checkbox
					id={id}
					type={type}
					// checked={isChecked}
					// onChange={onChanged}
					onClick={onChanged}
					name={"selectName"}
				/>
				{label}
			</Label>
		</Container>
	);
};

export default SearchOption;
