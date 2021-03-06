import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

export default function Detail() {
    let param = useParams()

    const users = useSelector(state => state.users)

    const user = users.filter(item => item.id == param.id)

    const { name, email, phone, website, address } = user[0]

    return (
        <div><i>
            <h1><i>Details</i></h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone:</th>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td>{email} </td>
                    </tr>
                    <tr>
                        <th scope="row">Web Site:</th>
                        <td>{website}</td>
                    </tr>
                    <tr>
                        <th scope="row">Adress</th>
                        <td>{address.street} {address.city}</td>
                    </tr>

                </tbody>
            </table>
            </i>

        </div>
    )
}