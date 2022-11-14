"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTaxesArgs_1 = require("./args/UpsertOneTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const helpers_1 = require("../../../helpers");
let UpsertOneTaxesResolver = class UpsertOneTaxesResolver {
    async upsertOneTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Taxes_1.Taxes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaxesArgs_1.UpsertOneTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTaxesResolver.prototype, "upsertOneTaxes", null);
UpsertOneTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], UpsertOneTaxesResolver);
exports.UpsertOneTaxesResolver = UpsertOneTaxesResolver;