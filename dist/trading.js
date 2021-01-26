function calc(e) {
  console.log("clickkked");
  if (e.target.value === "calculate") {
    turnover.value = Number(sales.value) + Number(returnsInwards.value);
    cogs.value =
      Number(opStock.value) +
      Number(purchases.value) -
      Number(returnsOutwards.value) -
      Number(purchasesDrawings.value) +
      Number(carriageInwards.value) +
      Number(freightCharges.value) +
      Number(railageInwards.value) -
      Number(cloStock.value);
    grossProfit.value = Number(turnover.value) - Number(cogs.value);
    totalIncome.value =
      Number(provisionIncome.value) +
      Number(rentReceived.value) +
      Number(discountReceived.value);
    grossProfitAfterIncome.value =
      Number(totalIncome.value) + Number(grossProfit.value);
    totalExpenses.value =
      Number(provisionExpense.value) +
      Number(dep1.value) +
      Number(dep2.value) +
      Number(dep3.value) +
      Number(exp1.value) +
      Number(exp2.value) +
      Number(exp3.value) +
      Number(exp4.value) +
      Number(exp5.value) +
      Number(exp6.value);
    netProfit.value =
      Number(grossProfitAfterIncome.value) + Number(totalExpenses.value);
  }
  if (e.target.value === "Answer1") {
    if (cd.value !== "") {
      console.log("test1");
      cd.value = Number(cd.value);
      document.getElementById("cd").style.color = "red";
      if (Number(cd.value) > Number(bd.value)) {
        provisionExpense.value = Number(cd.value) - Number(bd.value);
        document.getElementById("provisionExpense").style.color = "blue";
      } else if (Number(cd.value) < Number(bd.value)) {
        provisionIncome.value = Number(bd.value) - Number(cd.value);
        document.getElementById("cd").style.color = "red";
        document.getElementById("provisionIncome").style.color = "blue";
      } else {
        document.getElementById("provisionExpense").style.color = "blue";
        document.getElementById("provisionIncome").style.color = "blue";
        provisionExpense.value = "0";
        provisionIncome.value = "0";
      }
    } else {
      console.log("test2");
      cd.value =
        (Number(debtors.value) - Number(badDebts.value)) *
        Number(percentage.value);
      document.getElementById("cd").style.color = "red";
      if (Number(cd.value) > Number(bd.value)) {
        provisionExpense.value = Number(cd.value) - Number(bd.value);
        document.getElementById("provisionExpense").style.color = "blue";
      } else if (Number(cd.value) < Number(bd.value)) {
        provisionIncome.value = Number(bd.value) - Number(cd.value);
        document.getElementById("cd").style.color = "red";
        document.getElementById("provisionIncome").style.color = "blue";
      } else {
        provisionExpense.value = "0";
        provisionIncome.value = "0";
      }
    }
  }
  if (e.target.value === "dep1") {
    dep1.value =
      (Number(cost1.value) - Number(accDep1.value)) * Number(depPer1.value);
    depreciation1.value = `dep of ${asset1.value}`;
    changeAsset1.value = asset1.value;
    if (balCost1.value === "") {
      balCost1.value = Number(cost1.value);
    }
  }

  if (e.target.innerHTML === "dep2") {
    dep2.value =
      (Number(cost2.value) - Number(accDep2.value)) * Number(depPer2.value);
    depreciation2.value = `dep of ${asset2.value}`;
    changeAsset2.value = asset2.value;
    balCost2.value = Number(cost2.value);
  }
  if (e.target.value === "dep3") {
    dep3.value = Number(cost3.value) * Number(depPer3.value);
    depreciation3.value = `dep of ${asset3.value}`;
    changeAsset3.value = asset3.value;
    balCost3.value = Number(cost3.value);
  }
  //Accruals
  if (e.target.value === "Answer2") {
    if (ogExp1.value !== "") {
      exp1.value = Number(ogExp1.value) + Number(acc1.value);
      rem1.value = expenses1.value;
      document.getElementById("exp1").style.color = "blue";
    }
    if (ogExp2.value !== "") {
      exp2.value = Number(ogExp2.value) + Number(acc2.value);
      rem2.value = expenses2.value;
      document.getElementById("exp2").style.color = "blue";
    }
  }
  //prepayments
  if (e.target.value === "Answer3") {
    if (ogExp3.value !== "") {
      exp3.value = Number(ogExp3.value) - Number(pre1.value);
      rem3.value = expenses3.value;
    }
    if (ogExp4.value !== "") {
      exp4.value = Number(ogExp4.value) - Number(pre2.value);
      rem4.value = expenses4.value;
      document.getElementById("exp3").style.color = "blue";
    }
  }
  //net profit

  if (e.target.value === "balanceSheet") {
    balNetProfit.value = Number(netProfit.value);
    //balance sheet
    totalFixedAssets.value =
      Number(nbv1.value) +
      Number(nbv2.value) +
      Number(nbv3.value) +
      Number(nbv4.value);

    totalCurrentAssets.value =
      Number(stock.value) +
      Number(balDebtors.value) +
      Number(prepayments.value) +
      Number(bank.value) +
      Number(cash.value);
    totalCurrentLiabilities.value =
      Number(creditors.value) +
      Number(accruals.value) +
      Number(overdraft.value);
    nwc.value =
      Number(totalCurrentAssets.value) - Number(totalCurrentLiabilities.value);
    netAssets.value = Number(totalFixedAssets.value) + Number(nwc.value);
    totalAfterDrawings.value =
      Number(balNetProfit.value) - Number(drawings.value);
    capitalEmployed.value =
      Number(capital.value) +
      Number(totalAfterDrawings.value) +
      Number(longTerm.value);
    //debtors
    if (
      debtors.value !== "" ||
      badDebts.value !== "" ||
      percentage.value !== ""
    )
      balDebtors.value =
        Number(debtors.value) - Number(badDebts.value) - Number(cd.value);
    document.getElementById("balDebtors").style.color = "blue";

    if (capitalEmployed.value === netAssets.value) {
      document.getElementById("capitalEmployed").style.color = "green";
      document.getElementById("netAssets").style.color = "green";
    } else {
      document.getElementById("capitalEmployed").style.color = "red";
      document.getElementById("netAssets").style.color = "red";
    }
    //costs
    balDep1.value = Number(accDep1.value) + Number(dep1.value);
    balDep2.value = Number(accDep2.value) + Number(dep2.value);
    balDep3.value = Number(accDep3.value) + Number(dep3.value);
    //nbv
    nbv1.value = Number(balCost1.value) - Number(balDep1.value);
    nbv2.value = Number(balCost2.value) - Number(balDep2.value);
    nbv3.value = Number(balCost3.value) - Number(balDep3.value);
  }
}

var buttons = document.getElementsByClassName("btn");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}
