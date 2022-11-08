"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneVisitsArgs_1 = require("./args/UpdateOneVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const helpers_1 = require("../../../helpers");
let UpdateOneVisitsResolver = class UpdateOneVisitsResolver {
    async updateOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVisitsArgs_1.UpdateOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneVisitsResolver.prototype, "updateOneVisits", null);
UpdateOneVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], UpdateOneVisitsResolver);
exports.UpdateOneVisitsResolver = UpdateOneVisitsResolver;
