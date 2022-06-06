"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCredit_memosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCredit_memosArgs_1 = require("./args/FindUniqueCredit_memosArgs");
const Credit_memos_1 = require("../../../models/Credit_memos");
const helpers_1 = require("../../../helpers");
let FindUniqueCredit_memosResolver = class FindUniqueCredit_memosResolver {
    async findUniqueCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCredit_memosArgs_1.FindUniqueCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCredit_memosResolver.prototype, "findUniqueCredit_memos", null);
FindUniqueCredit_memosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], FindUniqueCredit_memosResolver);
exports.FindUniqueCredit_memosResolver = FindUniqueCredit_memosResolver;
