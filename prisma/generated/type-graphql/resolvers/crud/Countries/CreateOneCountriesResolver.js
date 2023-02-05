"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCountriesArgs_1 = require("./args/CreateOneCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let CreateOneCountriesResolver = class CreateOneCountriesResolver {
    async createOneCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Countries_1.Countries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCountriesArgs_1.CreateOneCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCountriesResolver.prototype, "createOneCountries", null);
CreateOneCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], CreateOneCountriesResolver);
exports.CreateOneCountriesResolver = CreateOneCountriesResolver;
