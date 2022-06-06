"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSurveysResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSurveysArgs_1 = require("./args/UpsertSurveysArgs");
const Surveys_1 = require("../../../models/Surveys");
const helpers_1 = require("../../../helpers");
let UpsertSurveysResolver = class UpsertSurveysResolver {
    async upsertSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSurveysArgs_1.UpsertSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSurveysResolver.prototype, "upsertSurveys", null);
UpsertSurveysResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], UpsertSurveysResolver);
exports.UpsertSurveysResolver = UpsertSurveysResolver;
