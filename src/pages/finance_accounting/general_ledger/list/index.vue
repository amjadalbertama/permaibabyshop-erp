<template>
    <section class="general_ledger">
        <div class="page-header">
            <h3 class="page-title">General Ledger</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">General Ledger</li>
              </ol>
            </nav>
          </div>
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                    <div class="dropdown mb-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Nama Akun
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#" actived>Kas Kecil</a></li>
                          <li><a class="dropdown-item" href="#">Piutang Dagang</a></li>
                          <li><a class="dropdown-item" href="#">Piutang Afiliasi</a></li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Buku Besar</h4><br>
                    <div class="row mb-3">
                        <div class="col-12 col-md-12 col-xs-12">
                            <div class="table-responsive">
                                <table class="table mb-3" style="width: 30%;">
                                    <tbody>
                                        <tr>
                                            <td class="text-white" style="border: none;"><strong>No. Akun</strong></td>
                                            <td class="text-white" style="border: none;">:</td>
                                            <td class="text-white" style="border: none;">1-110</td>
                                        </tr>
                                        <tr>
                                            <td class="text-white" style="border: none;"><strong>Nama Akun</strong></td>
                                            <td class="text-white" style="border: none;">:</td>
                                            <td class="text-white" style="border: none;">Kas Kecil</td>
                                        </tr>
                                        <tr>
                                            <td class="text-white" style="border: none;"><strong>Akun D/K</strong></td>
                                            <td class="text-white" style="border: none;">:</td>
                                            <td class="text-white" style="border: none;">Debit</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                      <div class="row">
                          <div class="col-12 col-md-12 col-xs-12">
                              <div class="row">
                                  <div class="col-12 col-md-12 col-xs-12">
                                      <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center">#</th>
                                                    <th scope="col" class="text-center">Sumber jurnal</th>
                                                    <th scope="col" class="text-center">Saldo Awal</th>
                                                    <th scope="col" class="text-center">Debit</th>
                                                    <th scope="col" class="text-center">Kredit</th>
                                                    <th scope="col" class="text-center">Saldo Akhir</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th class="text-white" scope="row">1</th>
                                                    <td class="text-white">25-may-19</td>
                                                    <td class="text-white" rowspan="5"></td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white" rowspan="5"></td>
                                                </tr>
                                                <tr>
                                                    <th class="text-white" scope="row">2</th>
                                                    <td class="text-white">25-may-19</td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white">-</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-white" scope="row">3</th>
                                                    <td class="text-white">25-may-19</td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white">-</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-white" scope="row">4</th>
                                                    <td class="text-white">25-may-19</td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white">-</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-white" scope="row">5</th>
                                                    <td class="text-white">25-may-19</td>
                                                    <td class="text-white">-</td>
                                                    <td class="text-white">-</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td class="text-white">Jumlah</td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
</template>