"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTicketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTicketingArgs_1 = require("./args/UpsertOneTicketingArgs");
const Ticketing_1 = require("../../../models/Ticketing");
const helpers_1 = require("../../../helpers");
let UpsertOneTicketingResolver = class UpsertOneTicketingResolver {
    async upsertOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTicketingArgs_1.UpsertOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTicketingResolver.prototype, "upsertOneTicketing", null);
UpsertOneTicketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], UpsertOneTicketingResolver);
exports.UpsertOneTicketingResolver = UpsertOneTicketingResolver;
