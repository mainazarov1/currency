export const InputApp = ({ valute, name, handleSelectChange }) => {

	return (
		<div className="inputApp">
			<select id="" className="inputApp__select"
				name={name}
				onChange={(e) => handleSelectChange(e)}
				value={name}
			>
				{valute && Object.entries(valute).map(([key, item], index) => {
					if (item.CharCode === 'USD' || item.CharCode === 'KGS') {
						return <option key={item.ID}
							value={JSON.stringify(item)}
						>{item.CharCode}</option>
					}
				})}
			</select>
			<input type="number" className="inputApp__input"
				name={name}
			// onChange={(e) => handleInputChange(e)}
			/>
		</div>
	)
}