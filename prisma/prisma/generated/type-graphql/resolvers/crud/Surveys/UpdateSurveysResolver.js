"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSurveysResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateSurveysArgs_1 = require("./args/UpdateSurveysArgs");
const Surveys_1 = require("../../../models/Surveys");
const helpers_1 = require("../../../helpers");
let UpdateSurveysResolver = class UpdateSurveysResolver {
    async updateSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSurveysArgs_1.UpdateSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateSurveysResolver.prototype, "updateSurveys", null);
UpdateSurveysResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], UpdateSurveysResolver);
exports.UpdateSurveysResolver = UpdateSurveysResolver;
