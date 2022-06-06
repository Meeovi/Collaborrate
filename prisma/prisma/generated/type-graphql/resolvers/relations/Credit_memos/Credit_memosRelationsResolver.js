"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memos_1 = require("../../../models/Credit_memos");
const Customers_1 = require("../../../models/Customers");
const Products_1 = require("../../../models/Products");
const helpers_1 = require("../../../helpers");
let Credit_memosRelationsResolver = class Credit_memosRelationsResolver {
    async customers(credit_memos, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findUnique({
            where: {
                credit_memo_id: {
                    credit_memo: credit_memos.credit_memo,
                    id: credit_memos.id,
                },
            },
        }).customers({});
    }
    async products(credit_memos, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findUnique({
            where: {
                credit_memo_id: {
                    credit_memo: credit_memos.credit_memo,
                    id: credit_memos.id,
                },
            },
        }).products({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Credit_memos_1.Credit_memos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosRelationsResolver.prototype, "customers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Products_1.Products, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Credit_memos_1.Credit_memos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosRelationsResolver.prototype, "products", null);
Credit_memosRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], Credit_memosRelationsResolver);
exports.Credit_memosRelationsResolver = Credit_memosRelationsResolver;
