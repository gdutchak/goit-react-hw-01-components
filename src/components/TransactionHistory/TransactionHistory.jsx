import { arrayOf, shape, string } from 'prop-types';
import '../TransactionHistory/TransactionHistory';

export const Transactions = ({ items }) => {
    return <div className="transaction-history">
        <table>
            <thead>
                <tr>
                    <th className='transaction-row'>Type</th>
                    <th className='transaction-row'>Amount</th>
                    <th className='transaction-row'>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => <tbody key={id}>
                <tr>
                    <td className='transaction-data'>{type}</td>
                    <td className='transaction-data'>{amount}</td>
                    <td className='transaction-data'>{currency}</td>
                </tr>
            </tbody>)}
        </table>
    </div>
}

Transactions.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        type: string.isRequired,
        amount: string.isRequired,
        currency: string.isRequired,
    }))
}