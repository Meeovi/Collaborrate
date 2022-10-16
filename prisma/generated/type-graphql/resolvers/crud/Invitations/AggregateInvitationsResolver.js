"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInvitationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInvitationsArgs_1 = require("./args/AggregateInvitationsArgs");
const Invitations_1 = require("../../../models/Invitations");
const AggregateInvitations_1 = require("../../outputs/AggregateInvitations");
const helpers_1 = require("../../../helpers");
let AggregateInvitationsResolver = class AggregateInvitationsResolver {
    async aggregateInvitations(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).invitations.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInvitations_1.AggregateInvitations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInvitationsArgs_1.AggregateInvitationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateInvitationsResolver.prototype, "aggregateInvitations", null);
AggregateInvitationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invitations_1.Invitations)
], AggregateInvitationsResolver);
exports.AggregateInvitationsResolver = AggregateInvitationsResolver;
