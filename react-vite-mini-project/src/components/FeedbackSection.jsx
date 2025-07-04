import { useState } from 'react';
import Button from './Button/Button'

export default function FeedbackSection() {

const [name, setName] = useState('');
const [reason, setReason] = useState('error');
const [hasError, setHasError] = useState(false)
function handleNameChange(evt) {
	setName(evt.target.value);
	setHasError(!evt.target.value.trim().length)
}

function handleReasonChange(evt) {
	setReason(evt.target.value)
}

  return (
    <section>
      <h3>Обратная связь</h3>

      <form action="">
        <label htmlFor="name">YOUR NAME</label>
        <input type="text" id="name" className="control" style={{
			border: hasError ? "solid 1px red": null
		}} value={name} onChange={handleNameChange}/>

        <label htmlFor="reason">REASON</label>
        <select id="reason" className="control" value={reason} onChange={handleReasonChange}>
          <option value="mistake">mistake</option>
          <option value="error">error</option>
          <option value="bug">bug</option>
        </select>

	<Button disabled={hasError} isActive={!hasError}>SEND</Button>

      </form>
    </section>
  );
}
