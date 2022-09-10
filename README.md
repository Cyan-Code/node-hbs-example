# node-hbs-example
Aplicacion semi-dinamica, con Handelbars

class Perceptron {
    generateValues(alpha, w1, w2, threshold) {
        return {
            alpha: alpha || Math.random(),
            w1: w1 || Math.random(),
            w2: w2 || Math.random(),
            threshold: threshold || Math.random()
        }
    }
    wantedOutputs(v1, v2) {
        return (v1 && v2)
    }
    getErrorRate(w, z){
        return w - z
    }
    re_evaluateMethod(error, alpha, threshold, w1, w2, x1, x2){
        const errAlpha = alpha * error
        const newThreshold = threshold + (-(errAlpha))
        const newW1 = w1 + (errAlpha * x1)
        const newW2 = w2 + (errAlpha * x2)
        return {
            newThreshold,
            newW1,
            newW2
        }
    }
    evaluate_Z(value1, value2, w1, w2, threshold) {
        const z = (value1 * w1 + value2 * w2) - threshold
        return (z < 0) ? 0 : 1
    }
    iterations() {
        const desiredValues = [[0, 0], [0, 1], [1, 0], [1, 1]]
        let { alpha, threshold, w1, w2 } = this.generateValues()
        let i = 0;
        do {
            const [v1, v2] = desiredValues[i]
            const z = this.evaluate_Z(v1, v2, w1, w2, threshold)
            const w = this.wantedOutputs(v1, v2)
            console.log(desiredValues[i], {zp: z, wp: w})
            if (z === w) {
                console.log({peso1: w1, peso2: w2, wide: threshold})
                console.log('------------------------------')
                i++
            } else {
                const error = this.getErrorRate(w, z)
                const {
                    newW1,
                    newW2,
                    newThreshold
                } = this.re_evaluateMethod(error, alpha, threshold, w1, w2, v1, v2)
                threshold = newThreshold
                w1 = newW1
                w2 = newW2
                console.log({peso1: w1, peso2: w2, wide: threshold, p_error: error})
                console.log('Error')
                console.log('------------------------------')
            }
        } while (i < desiredValues.length);
        console.log(w1, w2, threshold)
        console.log('end')
    }

}

Perceptron.prototype.iterations()

