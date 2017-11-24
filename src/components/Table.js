import React, { Component } from 'react'

class Table extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {id: 1, jenis: 'Premium', jumlah: 200},
        {id: 2, jenis: 'Pertalite', jumlah: 200},
        {id: 3, jenis: 'Pertamax', jumlah: 200}
      ]
    }
  }

  render() {
    return (
      <div>
        <h3>Sistem Pengisisan Bahan Bakar Minyak</h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Jenis BBM</th>
              <th>Jumlah</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => {
              return(
                <tr className="warning" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.jenis}</td>
                  <td>{item.jumlah}</td>
                  <td>Delete | Edit</td>
                </tr>
              )
            })}

          </tbody>

        </table>
</div>
    )
  }
}

export default Table
