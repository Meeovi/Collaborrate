"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCasesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCasesArgs_1 = require("./args/UpsertCasesArgs");
const Cases_1 = require("../../../models/Cases");
const helpers_1 = require("../../../helpers");
let UpsertCasesResolver = class UpsertCasesResolver {
    async upsertCases(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cases.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cases_1.Cases, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCasesArgs_1.UpsertCasesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCasesResolver.prototype, "upsertCases", null);
UpsertCasesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cases_1.Cases)
], UpsertCasesResolver);
exports.UpsertCasesResolver = UpsertCasesResolver;
