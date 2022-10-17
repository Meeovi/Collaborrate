"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneInvitationsArgs_1 = require("./args/DeleteOneInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const helpers_1 = require("../../../helpers");
let DeleteOneInvitationsResolver = class DeleteOneInvitationsResolver {
    async deleteOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInvitationsArgs_1.DeleteOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneInvitationsResolver.prototype, "deleteOneInvitations", null);
DeleteOneInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], DeleteOneInvitationsResolver);
exports.DeleteOneInvitationsResolver = DeleteOneInvitationsResolver;
