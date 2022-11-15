"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVisitsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstVisitsOrThrowArgs_1 = require("./args/FindFirstVisitsOrThrowArgs");
const Visits_1 = require("../../../models/Visits");
const helpers_1 = require("../../../helpers");
let FindFirstVisitsOrThrowResolver = class FindFirstVisitsOrThrowResolver {
    async findFirstVisitsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVisitsOrThrowArgs_1.FindFirstVisitsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstVisitsOrThrowResolver.prototype, "findFirstVisitsOrThrow", null);
FindFirstVisitsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], FindFirstVisitsOrThrowResolver);
exports.FindFirstVisitsOrThrowResolver = FindFirstVisitsOrThrowResolver;
