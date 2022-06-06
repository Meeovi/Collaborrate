"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCountriesArgs_1 = require("./args/UpdateCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let UpdateCountriesResolver = class UpdateCountriesResolver {
    async updateCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCountriesArgs_1.UpdateCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCountriesResolver.prototype, "updateCountries", null);
UpdateCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], UpdateCountriesResolver);
exports.UpdateCountriesResolver = UpdateCountriesResolver;
