"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCountriesArgs_1 = require("./args/DeleteManyCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCountriesResolver = class DeleteManyCountriesResolver {
    async deleteManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCountriesArgs_1.DeleteManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCountriesResolver.prototype, "deleteManyCountries", null);
DeleteManyCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], DeleteManyCountriesResolver);
exports.DeleteManyCountriesResolver = DeleteManyCountriesResolver;
