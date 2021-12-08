import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

interface obData {
  data: any
}
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [] },
    ]
  };

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({ labels, values }) => {

      this.doughnutChartData = {
        labels: labels,
        datasets: [{data: values}]
      }

    })

  }

}
