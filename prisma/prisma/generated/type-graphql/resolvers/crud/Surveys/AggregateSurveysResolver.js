"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSurveysResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSurveysArgs_1 = require("./args/AggregateSurveysArgs");
const Surveys_1 = require("../../../models/Surveys");
const AggregateSurveys_1 = require("../../outputs/AggregateSurveys");
const helpers_1 = require("../../../helpers");
let AggregateSurveysResolver = class AggregateSurveysResolver {
    async aggregateSurveys(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSurveys_1.AggregateSurveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSurveysArgs_1.AggregateSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSurveysResolver.prototype, "aggregateSurveys", null);
AggregateSurveysResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], AggregateSurveysResolver);
exports.AggregateSurveysResolver = AggregateSurveysResolver;
