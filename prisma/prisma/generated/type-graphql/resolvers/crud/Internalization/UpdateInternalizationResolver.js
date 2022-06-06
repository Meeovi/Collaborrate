"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInternalizationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateInternalizationArgs_1 = require("./args/UpdateInternalizationArgs");
const Internalization_1 = require("../../../models/Internalization");
const helpers_1 = require("../../../helpers");
let UpdateInternalizationResolver = class UpdateInternalizationResolver {
    async updateInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInternalizationArgs_1.UpdateInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateInternalizationResolver.prototype, "updateInternalization", null);
UpdateInternalizationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], UpdateInternalizationResolver);
exports.UpdateInternalizationResolver = UpdateInternalizationResolver;
