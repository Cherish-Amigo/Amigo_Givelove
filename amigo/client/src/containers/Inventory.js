import "./Inventory.css";

function Inventory() {
  const field = ['3세 남아 옷', '10세 여아 옷', '3세 동화책', '1세 장난감']
  const checkbox = document.getElementById('my_checkbox');
  const is_checked = checkbox.checked;
  return (
    <div id="inventory-tool">
        {
            field.map(element => {
                return (
                  <div id="check-container">
                    <input id="my_checkbox" type="checkbox" onClick={is_checked()} />
                    <p id="cartagori">{element}</p>
                  </div>
                )
            })
        }
    </div>
  );
}

export default Inventory;
