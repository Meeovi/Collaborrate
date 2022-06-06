"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCountriesArgs_1 = require("./args/DeleteCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let DeleteCountriesResolver = class DeleteCountriesResolver {
    async deleteCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCountriesArgs_1.DeleteCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCountriesResolver.prototype, "deleteCountries", null);
DeleteCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], DeleteCountriesResolver);
exports.DeleteCountriesResolver = DeleteCountriesResolver;
