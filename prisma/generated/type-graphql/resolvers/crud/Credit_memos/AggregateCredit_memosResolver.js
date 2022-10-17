"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCredit_memosArgs_1 = require("./args/AggregateCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const AggregateCredit_memos_1 = require("../../outputs/AggregateCredit_memos");
const helpers_1 = require("../../../helpers");
let AggregateCredit_memosResolver = class AggregateCredit_memosResolver {
    async aggregateCredit_memos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCredit_memos_1.AggregateCredit_memos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCredit_memosArgs_1.AggregateCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCredit_memosResolver.prototype, "aggregateCredit_memos", null);
AggregateCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], AggregateCredit_memosResolver);
exports.AggregateCredit_memosResolver = AggregateCredit_memosResolver;
