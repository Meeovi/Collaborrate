"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaxesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTaxesArgs_1 = require("./args/CreateManyTaxesArgs");
const Taxes_1 = require("../../../models/Taxes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTaxesResolver = class CreateManyTaxesResolver {
    async createManyTaxes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taxes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTaxesArgs_1.CreateManyTaxesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTaxesResolver.prototype, "createManyTaxes", null);
CreateManyTaxesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Taxes_1.Taxes)
], CreateManyTaxesResolver);
exports.CreateManyTaxesResolver = CreateManyTaxesResolver;
