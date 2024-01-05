<template>
    <section class="trial_balance">
        <div class="page-header">
            <h3 class="page-title">Trial Balance</h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Trial Balance</li>
              </ol>
            </nav>
          </div>
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                    <!-- <div class="dropdown mb-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            AKTIVA-1 Computer and Equipment
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="#" actived>AKTIVA-1 Computer and Equipment</a></li>
                          <li><a class="dropdown-item" href="#">AKTIVA-2</a></li>
                          <li><a class="dropdown-item" href="#">AKTIVA-3</a></li>
                        </ul>
                    </div> -->
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Neraca Lajur</h4>
                      <div class="row">
                          <div class="col-12 col-md-12 col-xs-12 mb-3">
                              <div class="row">
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table mb-3">
                                            <tbody>
                                                <tr>
                                                    <td class="text-white" style="border: none;"><strong>Bulan</strong></td>
                                                    <td class="text-white" style="border: none;">:</td>
                                                    <td class="text-white" style="border: none;">Mei 2019</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                    
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  
                                  </div>
                                  <div class="col-3 col-md-3 col-sm-12 col-xs-12">
                                  <form class="" novalidate onsubmit="return false">
                                      <div class="d-flex align-items-center">
                                      <label class="p-2">Search: </label>
                                      <b-input-group class="mx-auto">
                                          <b-form-input></b-form-input>
                                          <b-input-group-append>
                                          <b-button variant="info" class="btn-md-custom"><i class="mdi mdi-magnify"></i></b-button>
                                          </b-input-group-append>
                                      </b-input-group>
                                      </div>
                                  </form>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12 col-md-12 col-xs-12">
                              <div class="row">
                                  <div class="col-12 col-md-12 col-xs-12">
                                      <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th scope="col" rowspan="2" class="text-center">#</th>
                                                <th scope="col" rowspan="2" class="text-center">Nama Akun</th>
                                                <th scope="col" rowspan="2" class="text-center">Akun D/K</th>
                                                <th scope="col" colspan="2" class="text-center">Neraca Saldo</th>
                                                <th scope="col" rowspan="2" class="text-center">Akun NR/LR</th>
                                                <th scope="col" colspan="2"  class="text-center">Laba-Rugi</th>
                                                <th scope="col" colspan="2"  class="text-center">Neraca</th>
                                            </tr>
                                            <tr>
                                                <th class="text-center">Debet</th>
                                                <th class="text-center">Kredit</th>
                                                <th class="text-center">Debet</th>
                                                <th class="text-center">Kredit</th>
                                                <th class="text-center">Debet</th>
                                                <th class="text-center">Kredit</th>
                                            </tr>
                                            </thead>
                                            <tbody >
                                            <tr >
                                                <th class="text-white" scope="row">1</th>
                                                <td class="text-white">Aktiva</td>
                                                <td class="text-white">D</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">0</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">2</th>
                                                <td class="text-white">Aktiva Lancar</td>
                                                <td class="text-white">D</td>
                                                <td class="text-white">300.000.000</td>
                                                <td class="text-white"></td>
                                                <td class="text-white">NR</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">300.000.000</td>
                                                <td class="text-white"></td>

                                               
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">3</th>
                                                <td class="text-white">Kas Kecil</td>
                                                <td class="text-white">D</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">NR</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">4</th>
                                                <td class="text-white">Bank IDR</td>
                                                <td class="text-white">D</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">NR</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                            </tr>
                                            <tr>
                                                <th class="text-white" scope="row">5</th>
                                                <td class="text-white">Bank Mega</td>
                                                <td class="text-white">D</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white">NR</td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                                <td class="text-white"></td>
                                            
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td></td> 
                                                    <td class="text-white" colspan="2">Keseimbangan</td> 
                                                    <td class="text-white">300.000.000</td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white"></td>
                                                    <td class="text-white"></td> 
                                                   
                                                </tr>
                                                <tr>
                                                    <td></td> 
                                                    <td class="text-white" colspan="6">Laba Rugi</td> 
                                                    <td class="text-white"></td> 
                                                    <td class="text-white">300.000.000</td> 
                                                    <td class="text-white"></td> 
                                                </tr>
                                                <tr>
                                                    <td></td> 
                                                    <td class="text-white" colspan="7">Keseimbangan</td> 
                                                    <td class="text-white">300.000.000</td> 
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