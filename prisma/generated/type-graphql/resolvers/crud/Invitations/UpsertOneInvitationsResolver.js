"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneInvitationsArgs_1 = require("./args/UpsertOneInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const helpers_1 = require("../../../helpers");
let UpsertOneInvitationsResolver = class UpsertOneInvitationsResolver {
    async upsertOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invitations_1.Invitations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInvitationsArgs_1.UpsertOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInvitationsResolver.prototype, "upsertOneInvitations", null);
UpsertOneInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], UpsertOneInvitationsResolver);
exports.UpsertOneInvitationsResolver = UpsertOneInvitationsResolver;
