import { Router } from 'express';
import { riskController } from '../controllers/risk.controller';
import { riskSimulationController } from '../controllers/risk-simulation.controller';

const router = Router();

router.get('/pool-health/:poolId', (req, res) => riskController.getPoolHealth(req, res));

router.get('/liquidation-heatmap', (req, res) => riskController.getLiquidationHeatmap(req, res));

router.get('/oracle-health', (req, res) => riskController.getOracleHealth(req, res));

router.get('/safety-score', (req, res) => riskController.getProtocolSafetyScore(req, res));

router.get('/metric-trends', (req, res) => riskController.getMetricTrends(req, res));

router.get('/alerts', (req, res) => riskController.getAlerts(req, res));

router.put('/alert-config', (req, res) => riskController.updateAlertConfig(req, res));

router.get('/user/:address/risk-profile', (req, res) => riskController.getUserRiskProfile(req, res));

router.get('/dashboard', (req, res) => riskController.getDashboard(req, res));

router.post('/simulate', (req, res) => riskSimulationController.simulate(req, res));

router.post('/simulate/batch', (req, res) => riskSimulationController.simulateBatch(req, res));

router.get('/scenarios', (req, res) => riskSimulationController.getScenarios(req, res));

router.post('/correlation', (req, res) => riskSimulationController.getCorrelation(req, res));

router.post('/recommendations', (req, res) => riskSimulationController.getRecommendations(req, res));

export default router;
