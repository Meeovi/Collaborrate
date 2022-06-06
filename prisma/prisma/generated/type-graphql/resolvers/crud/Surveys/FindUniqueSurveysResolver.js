"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSurveysResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSurveysArgs_1 = require("./args/FindUniqueSurveysArgs");
const Surveys_1 = require("../../../models/Surveys");
const helpers_1 = require("../../../helpers");
let FindUniqueSurveysResolver = class FindUniqueSurveysResolver {
    async findUniqueSurveys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).surveys.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Surveys_1.Surveys, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSurveysArgs_1.FindUniqueSurveysArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSurveysResolver.prototype, "findUniqueSurveys", null);
FindUniqueSurveysResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Surveys_1.Surveys)
], FindUniqueSurveysResolver);
exports.FindUniqueSurveysResolver = FindUniqueSurveysResolver;
