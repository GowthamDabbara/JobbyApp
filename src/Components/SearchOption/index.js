import { useState } from "react";
import { Container, Label, Checkbox } from "./styled";

const SearchOption = ({ label, callback }) => {
	const [isChecked, setIsChecked] = useState(false);
	const onChanged = () => {
		setIsChecked(!isChecked);
		callback();
	};
	return (
		<Container>
			<Label>
				<Checkbox type="checkbox" checked={isChecked} onChange={onChanged} />
				{label}
			</Label>
		</Container>
	);
};

export default SearchOption;
