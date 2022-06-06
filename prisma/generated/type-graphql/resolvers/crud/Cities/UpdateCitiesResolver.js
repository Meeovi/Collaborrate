"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateCitiesArgs_1 = require("./args/UpdateCitiesArgs");
const Cities_1 = require("../../../models/Cities");
const helpers_1 = require("../../../helpers");
let UpdateCitiesResolver = class UpdateCitiesResolver {
    async updateCities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).cities.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cities_1.Cities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCitiesArgs_1.UpdateCitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateCitiesResolver.prototype, "updateCities", null);
UpdateCitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cities_1.Cities)
], UpdateCitiesResolver);
exports.UpdateCitiesResolver = UpdateCitiesResolver;
