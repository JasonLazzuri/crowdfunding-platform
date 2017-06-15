import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'moneyStillNeeded',
  pure: false
})

export class MoneyStillNeededPipe implements PipeTransform {

  transform(input: Project[], desiredMoneyStillNeeded) {
    var output: Project[] = [];
    if (desiredMoneyStillNeeded === "over10,000") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].desiredMoney - input[i].raisedMoney > 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMoneyStillNeeded === "under10,000") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].desiredMoney - input[i].raisedMoney <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
