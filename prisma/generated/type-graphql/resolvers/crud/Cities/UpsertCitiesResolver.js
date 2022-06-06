"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertCitiesArgs_1 = require("./args/UpsertCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let UpsertCitiesResolver = class UpsertCitiesResolver {
    async upsertCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCitiesArgs_1.UpsertCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertCitiesResolver.prototype, "upsertCities", null);
UpsertCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], UpsertCitiesResolver);
exports.UpsertCitiesResolver = UpsertCitiesResolver;
