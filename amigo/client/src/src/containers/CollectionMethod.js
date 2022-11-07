import './CollectionMethod.css';

function CollectionMethod() {

   const checkOnlyOne = (checkThis) => {
      const checkboxes = document.getElementsByName('method')
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false
        }
      }
    }

    return (
      <div className='take'>
        <label for="chk1"><input className="checkbox" type="checkbox" id="chk1" name="method" onChange={(e) => checkOnlyOne(e.target)}/>택배</label>
        <label for="chk2"><input className="checkbox" type="checkbox" id="chk2" name="method" onChange={(e) => checkOnlyOne(e.target)}/>직접 방문</label>
        <label for="chk3"><input className="checkbox" type="checkbox" id="chk3" name="method" onChange={(e) => checkOnlyOne(e.target)}/>단체 수거</label>
      </div>
    )
}

export default CollectionMethod;