import "./Inventory.css";

function Inventory() {
  const field = ['3세 남아 옷', '10세 여아 옷', '3세 동화책', '1세 장난감']
  return (
    <div id="inventory-tool">
        {
            field.map(element => {
                return (
                  <div id="check-container">
                    <input id="my_checkbox" type="checkbox" />
                    <p id="cartagori">{element}</p>
                  </div>
                )
            })
        }
    </div>
  );
}

export default Inventory;
