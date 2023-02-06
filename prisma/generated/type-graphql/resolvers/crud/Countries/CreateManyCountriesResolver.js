"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCountriesArgs_1 = require("./args/CreateManyCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCountriesResolver = class CreateManyCountriesResolver {
    async createManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCountriesArgs_1.CreateManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCountriesResolver.prototype, "createManyCountries", null);
CreateManyCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], CreateManyCountriesResolver);
exports.CreateManyCountriesResolver = CreateManyCountriesResolver;
