"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateCountriesArgs_1 = require("./args/CreateCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const helpers_1 = require("../../../helpers");
let CreateCountriesResolver = class CreateCountriesResolver {
    async createCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCountriesArgs_1.CreateCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateCountriesResolver.prototype, "createCountries", null);
CreateCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], CreateCountriesResolver);
exports.CreateCountriesResolver = CreateCountriesResolver;
