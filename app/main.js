'use strict'

module.exports = {
	aritGeo: (progression)=>{
		
		if(!Array.isArray(progression)) return  'Please supply a list';

		let isNumbers = progression.every(function(element){
			return typeof(element) == 'number';
		})

		if (isNumbers == 'false') return 'Your list contains element(s) that is/are not numbers';

		let ap = 'false';
		let gp = 'false';
		if(progression.length===0){
			return 0;
		}
		else if(progression.length<=2){
			return -1;
		}
		else{
			let lastIndex = progression.length - 1;
			let commonDifferenceofAp = progression[1] - progression[0];
			let commonDifferenceofGp = progression[1] / progression[0];
			progression.forEach(function(element, index){
				if(index == 0){
					commonDifferenceofAp == progression[index+1] - element? ap = 'true': ap='false';
					commonDifferenceofGp == progression[index+1] / element? gp = 'true': gp='false';
				}else if(index == lastIndex){
					commonDifferenceofAp == element - progression[index-1]? ap = 'true': ap='false';
					commonDifferenceofGp == element / progression[index-1]? gp = 'true': gp='false';
				}
				else{
					commonDifferenceofAp == progression[index+1] - element? ap = 'true': ap='false';
					commonDifferenceofGp == progression[index+1] / element? gp = 'true': gp='false';
				}

			})
			if(ap == 'true') return 'Arithmetic'
			if(gp == 'true') return 'Geometric'
			if(ap == 'false' && gp == 'false') return -1;
		}
		
	}
}