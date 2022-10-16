"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneInvitationsArgs_1 = require("./args/CreateOneInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const helpers_1 = require("../../../helpers");
let CreateOneInvitationsResolver = class CreateOneInvitationsResolver {
    async createOneInvitations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInvitationsArgs_1.CreateOneInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneInvitationsResolver.prototype, "createOneInvitations", null);
CreateOneInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], CreateOneInvitationsResolver);
exports.CreateOneInvitationsResolver = CreateOneInvitationsResolver;
