"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCountriesArgs_1 = require("./args/UpdateOneCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let UpdateOneCountriesResolver = class UpdateOneCountriesResolver {
    async updateOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCountriesArgs_1.UpdateOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCountriesResolver.prototype, "updateOneCountries", null);
UpdateOneCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], UpdateOneCountriesResolver);
exports.UpdateOneCountriesResolver = UpdateOneCountriesResolver;
