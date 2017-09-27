'use strict'

module.exports = {
	aritGeo: (progression)=>{
		
		if(!Array.isArray(progression)) return  'Please supply a list';

		let isNumbers = progression.every((element)=>{
			return typeof(element) == 'number';
		})

		if (isNumbers == 'false') return 'Your list contains element(s) that is/are not numbers';

		let isArithmeticProgression = 'false';
		let isGeometricProgression = 'false';
		if(progression.length===0){
			return 0;
		}
		else if(progression.length<=2){
			return -1;
		}
		else{
			let lastIndex = progression.length - 1;
			const commonDifferenceOfAp = progression[1] - progression[0];
			const commonRatioOfGp = progression[1] / progression[0];
			progression.forEach((element, index)=>{
				if(index == 0){
					commonDifferenceOfAp == progression[index+1] - element? isArithmeticProgression = 'true': isArithmeticProgression='false';
					commonRatioOfGp == progression[index+1] / element? isGeometricProgression = 'true': isGeometricProgression ='false';
				}else if(index == lastIndex){
					commonDifferenceOfAp == element - progression[index-1]? isArithmeticProgression = 'true': isArithmeticProgression='false';
					commonRatioOfGp == element / progression[index-1]? isGeometricProgression = 'true': isGeometricProgression ='false';
				}
				else{
					commonDifferenceOfAp == progression[index+1] - element? isArithmeticProgression = 'true': isArithmeticProgression='false';
					commonRatioOfGp == progression[index+1] / element? isGeometricProgression = 'true': isGeometricProgression='false';
				}

			})
			if(isArithmeticProgression == 'true') return 'Arithmetic'
			if(isGeometricProgression == 'true') return 'Geometric'
			if(isArithmeticProgression == 'false' && isGeometricProgression == 'false') return -1;
		}	
	}
}

