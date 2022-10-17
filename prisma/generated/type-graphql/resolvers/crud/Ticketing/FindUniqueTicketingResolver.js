"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTicketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTicketingArgs_1 = require("./args/FindUniqueTicketingArgs");
const Ticketing_1 = require("../../../models/Ticketing");
const helpers_1 = require("../../../helpers");
let FindUniqueTicketingResolver = class FindUniqueTicketingResolver {
    async ticketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ticketing_1.Ticketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTicketingArgs_1.FindUniqueTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTicketingResolver.prototype, "ticketing", null);
FindUniqueTicketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], FindUniqueTicketingResolver);
exports.FindUniqueTicketingResolver = FindUniqueTicketingResolver;
