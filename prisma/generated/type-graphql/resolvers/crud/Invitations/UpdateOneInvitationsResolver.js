"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneInvitationsArgs_1 = require("./args/UpdateOneInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const helpers_1 = require("../../../helpers");
let UpdateOneInvitationsResolver = class UpdateOneInvitationsResolver {
    async updateOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInvitationsArgs_1.UpdateOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneInvitationsResolver.prototype, "updateOneInvitations", null);
UpdateOneInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], UpdateOneInvitationsResolver);
exports.UpdateOneInvitationsResolver = UpdateOneInvitationsResolver;
